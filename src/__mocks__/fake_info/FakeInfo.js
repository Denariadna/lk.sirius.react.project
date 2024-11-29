import { faker } from '@faker-js/faker';

export function FakeInfo() {
    const FakeData = [];
    for (let i = 1; i < 10; i++) {
        FakeData.push(
            {
                id: i,
                image: faker.image.avatar(),
                title: faker.lorem.word(),
                description: faker.lorem.sentence()
            }
        )
    }
    return FakeData;
};
