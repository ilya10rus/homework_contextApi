import { RenderApp } from "./RenderApplication";

export const DefaultObject = ({todos, refresh}) => {
    console.log(todos);
    return todos.map(({ id, title, userId }) => (
        <RenderApp id={id} title={title} refresh={refresh} userId={userId} />
    ));
};