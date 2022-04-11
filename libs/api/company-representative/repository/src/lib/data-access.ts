import { PrismaClient } from "@prisma/client";
import express, {Request, Response} from "express";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) =>{
    const {id, email, password, passwordSalt, name, dateOfBirth, companyId, created, suspended, validated} = req.body;
    const user = await prisma.user.create({
        data: {
            id: id,
            email: email, 
            password: password, 
            passwordSalt: passwordSalt, 
            name: name, 
            dateOfBirth: dateOfBirth, 
            companyId: companyId, 
            created: created, 
            suspended: suspended, 
            validated: validated,
        }
    });
    res.json(user);
});
async function main() {

}

main()
    .catch(e => {})
    .finally(async() => {
        await prisma.$disconnect()
    })