using { metadata as nw } from './external/metadata';

service MyService {

    entity Categories as projection on nw.Categories;

}