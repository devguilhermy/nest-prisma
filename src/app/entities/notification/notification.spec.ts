import { Notification } from './Notification';
import { NotificationContent } from './properties/content';

describe('Notification', () => {
	it('should be able to create a notification', () => {
		const notification = new Notification({
			recipientId: '1q2w3e4r',
			title: 'Nova reserva',
			content: new NotificationContent(
				'Alguém reservou 2 vagas na sua carona pra Gyn amanhã',
			),
			category: 'booking',
		});

		expect(notification).toBeTruthy();
	});
});
