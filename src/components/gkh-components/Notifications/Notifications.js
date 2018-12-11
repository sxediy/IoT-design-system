import { notification} from "antd"

export const errorMesage = (text, title = `Упс..`) => notification.error({ 
    message: title,
    description: text,
});

export const sucessMessage = (text, title = 'Отлично!') => notification.success({
    message: title,
    description: text,
});

export const warningMessage = (text, title = 'Упс..') => notification.warning({
    message: title,
    description: text,
});
