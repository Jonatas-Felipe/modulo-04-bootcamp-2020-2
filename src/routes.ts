import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'Jonatas',
        email: 'jonatas@wodo.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'ReactNative',
            { title: 'Javascript', experience: 100 },
            { title: 'PHP', experience: 100 }
        ]
    });
    return response.json(user);
}