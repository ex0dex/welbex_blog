import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';
import multer from 'multer';

export enum FileType {
    IMAGE = "image",
    VIDEO = "video",
}


@Injectable()
export class FilesService {

    async createFile(file:Express.Multer.File): Promise<string> {
        try {
            const fileName = uuid.v4();
            const prefix = file.originalname.split('.').pop()
            const createName = `${fileName}.${prefix}`
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, createName), file.buffer)
            return createName; 
        } catch (e) {
            throw new HttpException('An Error Occured', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}


