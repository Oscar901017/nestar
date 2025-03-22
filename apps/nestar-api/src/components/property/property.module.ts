import { Module } from '@nestjs/common';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';
import { MongooseModule } from '@nestjs/mongoose';
import PropertySchema from '../../schemas/Property.model';
import { AuthModule } from '../../componenets/auth/auth.module';
import { ViewModule } from '../../componenets/view/view.module';

@Module({
  imports: [MongooseModule.forFeature([{
     name: 'Property  ', 
     schema: PropertySchema }]),
      AuthModule, 
      ViewModule],
  providers: [PropertyResolver, PropertyService]
})
export class PropertyModule {}
