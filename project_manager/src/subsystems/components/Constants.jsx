import Login from "./login/Login";
import LinksProvider from "./linksProvider/LinksProvider";
import ContainerProfileForm from "./containerProfileForm/ContainerProfileForm";
import Dashboard from "./dashboard/Dashboard";

const formRegisterPerson = {
  inputs: {
    propsAll: {
      none: '/*{...register("exampleRequired", { required: true })}*/',
      className: 'inputform',
    },
    props: [
      {
        placeholder: 'First Name',
        id: 'first_name',
      },
      {
        placeholder: 'Last Name',
        id: 'last_name',
      },
      {
        placeholder: 'ID Number',
        id: 'id_number',
      },
      {
        placeholder: 'Location',
        id: 'location',
      },
      {
        placeholder: 'E-mail address',
        id: 'email',
      }
    ],
    events: {
      input: 'updateWidthInput',
    }
  }
}

export const routes = [
  {
    path: "/",
    element: (
      <LinksProvider>
          <Dashboard>Home</Dashboard>
      </LinksProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <LinksProvider>
        <Login />
      </LinksProvider>
    ),
  },
  {
    path: '/form',
    element: (
      <LinksProvider>
        <ContainerProfileForm formData={formRegisterPerson} />
      </LinksProvider>
    ),
  },
];
