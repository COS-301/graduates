
import { Field, ObjectType } from "@nestjs/graphql";
import { Item} from "@prisma/client";

@ObjectType()
export class request_access{
    @Field()
    RequestId!: string;
    @Field()
    StudId!:string;
    @Field()
    CompId!:string;
    @Field()
    ItemId!:Item;
    @Field()
    Accepted!:boolean;
}