import { NotificationContent } from './content';

describe('NotificationContent', () => {
	it('should be able to create a notification content', () => {
		const content = new NotificationContent('Você têm uma nova reserva!');

		expect(content).toBeTruthy();
	});

	it('should not be able to create a notification content with less than 5 characters', () => {
		expect(() => {
			new NotificationContent('Oi');
		}).toThrowError();
	});

	it('should not be able to create a notification content with more than 240 characters', () => {
		expect(() => {
			new NotificationContent('A'.repeat(241));
		}).toThrowError();
	});
});
