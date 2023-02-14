import { NotificationContent } from './properties/content';

interface INotification {
	recipientId: string;
	title: string;
	content: NotificationContent;
	category: string;
	readAt?: Date | null;
	createdAt: Date;
}

type INotificationInput = Omit<INotification, 'readAt' | 'createdAt'>;

export class Notification {
	private props: INotification;

	constructor(props: INotificationInput) {
		this.props = {
			...props,
			createdAt: new Date(),
		};
	}

	public set recipientId(recipientId: string) {
		this.props.recipientId = recipientId;
	}

	public get recipientId(): string {
		return this.props.recipientId;
	}

	public set title(title: string) {
		this.props.title = title;
	}

	public get title(): string {
		return this.props.title;
	}

	public set content(content: NotificationContent) {
		this.props.content = content;
	}

	public get content(): NotificationContent {
		return this.props.content;
	}

	public set category(category: string) {
		this.props.category = category;
	}

	public get category(): string {
		return this.props.category;
	}

	public set readAt(readAt: Date | null | undefined) {
		this.props.readAt = readAt;
	}

	public get readAt(): Date | null | undefined {
		return this.props.readAt;
	}

	public get createdAt() {
		return this.props.createdAt;
	}
}
