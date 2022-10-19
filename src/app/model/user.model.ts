import DateAge from './date-age.model';
import Id from './id.model';
import Location from './location.model';
import Login from './login.model';
import Name from './name.model';
import Picture from './picture.model';

export default interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DateAge;
  registered: DateAge;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
