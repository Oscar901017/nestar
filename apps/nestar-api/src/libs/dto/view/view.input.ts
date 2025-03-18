import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty} from 'class-validator';
import { ViewGroup } from '../../enums/view.enum';
import { ObjectId } from 'mongoose';

@InputType()
export class ViewInput {

    @IsNotEmpty()   
    @Field(() => ViewGroup)
    memberId: ObjectId;
    //memberId: string;

    @IsNotEmpty()   
    @Field(() => String)
    viewRefId: ObjectId;

    @IsNotEmpty()   
    @Field(() => ViewGroup)
    viewGroup: string;


}
