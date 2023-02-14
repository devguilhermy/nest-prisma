import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({ message: 'Necessário informar o código do recipiente' })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty({
    message: 'Necessário informar o conteúdo',
  })
  @Length(5, 100, {
    message: 'Conteúdo deve ter entre 5 e 100 caracteres',
  })
  content: string;

  @IsNotEmpty({
    message: 'Necessário informar uma categoria',
  })
  category: string;
}
