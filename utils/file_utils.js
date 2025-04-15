import { access, writeFile } from 'fs/promises';

export async function ensureFile(path, defaultContent = '') {
    try {
        await access(path);
        return await readFile(path, 'utf-8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await writeFile(path, defaultContent, 'utf-8');
            return await readFile(path, 'utf-8');
        }
        throw err;
    }
}
