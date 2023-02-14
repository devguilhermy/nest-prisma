export class NotificationContent {
	private readonly content: string;

	private minLength = 5;
	private maxLength = 240;

	private validateLength(content: string): boolean {
		return (
			content.length > this.minLength && content.length < this.maxLength
		);
	}

	constructor(content: string) {
		if (!this.validateLength(content)) {
			throw new Error(
				`Tamanho de conteúdo inválido, deve ter entre ${this.minLength} e ${this.maxLength} caracteres`,
			);
		}

		this.content = content;
	}

	public get value(): string {
		return this.content;
	}
}
