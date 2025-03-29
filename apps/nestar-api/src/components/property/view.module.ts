import { ViewService } from '../view/view.service';
import { MongooseModule } from '@nestjs/mongoose';
import ViewSchema from '../../schemas/View.model';
import { Module } from '@nestjs/common';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'View', schema: ViewSchema }])],
	providers: [ViewService],
	exports: [ViewService],
})
export class ViewModule {}
