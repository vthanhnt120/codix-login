import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';

export const withLoading = <K extends string | number | symbol>(obj: Record<K, boolean>, loading: K) => <D>(obs: Observable<D>) => {
    const o = obj;
    o[loading] = true;
    return obs.pipe(
        finalize(() => {
            o[loading] = false;
        }),
    );
};