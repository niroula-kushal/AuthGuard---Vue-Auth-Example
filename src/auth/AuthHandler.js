import {ref} from "vue";

const ItemKey = 'user';

const IsLoggedIn = ref(false);
const User = ref({});

export const Initialize = () => {
    const item = localStorage.getItem(ItemKey);
    IsLoggedIn.value = !!item;
    if(!!item) {
        User.value = JSON.parse(item);
    }
};

const Login = (username, password) => {
    const user = {
        username: username,
        id: Symbol()
    };
    localStorage.setItem(ItemKey, JSON.stringify(user));
    IsLoggedIn.value = true;
    User.value = user;
};
const Logout = () => {
    localStorage.removeItem(ItemKey);
    IsLoggedIn.value = false;
    User.value = {};
};

const useAuth = () => {
    return {
        Login,
        Logout,
        IsLoggedIn,
        User
    };
};

export default useAuth;