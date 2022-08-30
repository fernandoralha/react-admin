import { Route, Switch } from 'react-router-dom';
import HomeView from './views/Home';
import UserCreateView from './views/UserCreateView';
import UserDetailsView from './views/UserDetailsView';
import UserEditView from './views/UserEditView';
import UserListView from './views/UserListView';

export default function Routes() {
  // useEffect(() => {
  //   window.onunhandledrejection = ({ reason }) => {
  //     if (reason instanceof CustomError) {
  //       if (reason.data?.objects) {
  //         reason.data.objects.forEach((error) => {
  //           message.error(error.userMessage);
  //         });
  //       } else {
  //         notification.error({
  //           message: reason.message,
  //           description:
  //             reason.data?.detail === 'Network Error'
  //               ? 'Erro na rede'
  //               : reason.data?.detail,
  //         });
  //       }
  //     } else {
  //       notification.error({
  //         message: 'Houve um erro',
  //       });
  //     }
  //   };

  //   return () => {
  //     window.onunhandledrejection = null;
  //   };
  // }, []);
  
  return (
    <Switch>
      <Route path={'/'} exact component={HomeView} />
      <Route
        path={'/usuarios/cadastro'}
        exact
        component={UserCreateView}
      />
      <Route
        path={'/usuarios/edicao/:id'}
        exact
        component={UserEditView}
      />
      <Route
        path={'/usuarios/:id'}
        exact
        component={UserDetailsView}
      />
      <Route
        path={'/usuarios'}
        exact
        component={UserListView}
      />
    </Switch>
  );
}
