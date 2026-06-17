import { ResolveFn } from '@angular/router';

export const studentResolver: ResolveFn<any> = (route, state) => {

  const id = route.paramMap.get('id');

  return {
    id: id,
    name: 'Student ' + id
  };

};