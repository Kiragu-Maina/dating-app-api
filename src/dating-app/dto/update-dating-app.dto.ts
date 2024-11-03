import { PartialType } from '@nestjs/swagger';
import { CreateDatingAppDto } from './create-dating-app.dto';

export class UpdateDatingAppDto extends PartialType(CreateDatingAppDto) {}
