
import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

// Export a named function for the GET HTTP method
export const GET = async (req, res) => {
    try {
        const filePath = path.join(process.cwd(), 'public/data.json'); // Adjust path as needed
        const fileData = await fs.promises.readFile(filePath, 'utf8');
        const parsedData = await JSON.parse(fileData);
        return NextResponse.json({ parsedData }, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 200 })
    }
};
