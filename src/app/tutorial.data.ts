import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Tutorial } from './tutorials/model/tutorial.model';

export class TutorialData implements InMemoryDbService {

    createDb() {
        const tutorials: Tutorial[] = [
            {
                'name': 'GOOGLE',
                'url': 'http://google.com'
            },
            {
                'name': 'MICROSOFT',
                'url': 'http://microsoft.com'
            },
            {
                'name': 'GE',
                'url': 'http://ge.com'
            },
            {
                'name': 'UTC',
                'url': 'http://utc.com'
            },
            {
                'name': 'OTIS',
                'url': 'http://otis.com'
            }
        ];
        return { tutorials };
    }
}
