import { WeightEntry } from 'src/app/models/weight-entry.model';

/**
 * Mock the @ionic/storage service as it does not really need testing
 */
export class StorageMock {
    private storageObj = {
        'weights': [
            {
                date: '2019-05-02T19:46:54.238Z',
                weight: 41
            },
            {
                date: '2019-05-01T19:46:54.238Z',
                weight: 42
            }
        ]
    };


    public get(key: string): Promise<any> {
        return new Promise(resolve => resolve(this.storageObj[key]));
    }

    public set(key: string, value: any): Promise<any> {
        return new Promise(resolve => resolve(null));
    }
}
