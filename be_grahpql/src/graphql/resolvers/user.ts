import { IResolvers } from '@graphql-tools/utils';
import { peopleDataSource } from '../../data/peopledata';
import { Db, ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken'
// import bcryptjs from 'bcryptjs';

const CreateToken = (user: any, secret: jwt.Secret, expiration: any) => {
    const { _id, email, name, lastname } = user;
    return jwt.sign({ _id, email, name, lastname }, secret, { expiresIn: expiration })
}

const userResolver: IResolvers = {
    Query: {
        getUser: async (parent, args, context: Db) => {
            try {
                return await context.collection('users').find().toArray() ?? [];
            } catch (error) {
                console.log(error);
            }
        },
        getUserById: async (parent, args, context: Db) => {
            try {
                return await context.collection('users').findOne({ _id: new ObjectId(args._id) });
            } catch (error) {
                console.log(error);
            }
        },
        getCurrentUser: async (parent, args, context: Db) => {
            const token = args?.token;
            if (!token) throw new Error("Token not provided");
            try {
                const user: any = jwt.verify(token, "abc.123");
                return await context.collection('users').findOne({ _id: new ObjectId(user?._id) });
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createUser: async (parent, args, context: Db) => {
            try {
                await context.collection('users').insertOne(args.userInput);
                return "User created successfully";
            } catch (error) {
                console.log(error);
            }
        },
        updateUser: async (parent, args, context: Db) => {
            try {
                console.log("Args:", args);
                console.log("ID a actualizar:", args._id);
                console.log("Datos:", args.userInput);

                
                const userExists = await context.collection('users').findOne({
                    _id: new ObjectId(args._id)
                });

                if (!userExists) {
                    console.log("Usuario no encontrado");
                    throw new Error("User not found");
                }

                
                await context.collection('users').updateOne(
                    { _id: new ObjectId(args._id) },
                    { $set: args.userInput }
                );

                
                const updatedUser = await context.collection('users').findOne({
                    _id: new ObjectId(args._id)
                });

                console.log("Usuario actualizado:", updatedUser);

                
                if (updatedUser) {
                    return {
                        _id: updatedUser._id.toString(),
                        name: updatedUser.name,
                        email: updatedUser.email,
                        password: updatedUser.password
                    };
                }

                return null;

            } catch (error) {
                console.log("Error:", error);
                return null;
            }
        },  
        authUser: async (parent, args, context: Db) => {
            const { email, password } = args?.authInput;
            const userColl = await context.collection('users').findOne({ email: email, password: password });
            if (!userColl) throw new Error("User or password incorrect");
            return {
                token: CreateToken(userColl, "abc.123", '24h')
            }
        }
    }  
};  
export default userResolver;