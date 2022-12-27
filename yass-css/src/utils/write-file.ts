import fs from 'fs/promises'


const writeFile = async (path: string, filename: string, content: string): Promise<void> => {
  await fs.mkdir(path, { recursive: true });

  await fs.writeFile(`${path}/${filename}`, content)
} 

export default writeFile
