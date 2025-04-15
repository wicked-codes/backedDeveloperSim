import jwt from 'jsonwebtoken';
import fs, { writeFile } from 'fs/promises';
import bcrypt from 'bcrypt';
import { ensureFile } from '../utils/file_utils.js';
import { randomUUID } from 'crypto';

const register = async(req, res) => {
    try {
        const userDetails = req.body || {};
        const {
            email = '',
            first_name = '',
            last_name = '',
            password = ''
        } = userDetails;
        if (req.headers['accept'] !== 'application/json') {
            res.status(406).json({
                success: false,
                message:
                    'Not Acceptable: This API only supports application/json.'
            });
            return;
        }
        if (!email || !first_name || !last_name || !password) {
            res.status(400).json({
                success: false,
                message:
                    'Request format is invalid. Visit the docs for appropriate format!'
            });
            return;
        }
        const userData = await ensureFile('../data/users.json', []);
        const users = JSON.parse(userData);
        const checkIfUserExists = users.find(
            ({ email: userEmail }) => userEmail === email
        );
        if (checkIfUserExists) {
            res.status(400).json({
                success: false,
                message: 'User with the same email exists.'
            });
            return;
        } else {
            const user = {
                email,
                first_name,
                last_name,
                password,
                id: randomUUID()
            };
            users.push(user);
            await writeFile('./data/users.json', JSON.stringify(users));
            res.status(200).json({
                success: true,
                message: 'User created successfully!',
                user_id: user.id
            });
            return;
        }
    } catch (error) {}
};

export { register };
