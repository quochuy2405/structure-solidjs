import { Component } from "solid-js";
import { render } from "solid-js/web";
import { useField, Form } from "solid-js-form";
import * as Yup from "yup";

const Input: Component<{ name: string; label: string }> = (props) => {
	const { field, form } = useField(props.name);
	const formHandler = form.formHandler;

	return (
		<>
			<label for={props.name}>
				{props.label}
				{field.required() ? " *" : ""}
			</label>
			<input
				name={props.name}
				value={field.value()}
				//@ts-ignore
				use:formHandler //still need to properly type the handler
			/>
			<span>{field.error()}</span>
		</>
	);
};

const App: Component = () => {
	return (
		<Form
			initialValues={{ username: "", password: "" }}
			validation={{
				username: Yup.string().required(),
				password: Yup.string().required(),
			}}
			onSubmit={async (form) => {
				console.log(form.values);
			}}>
			<Input name="username" label="Username" />
			<Input name="password" label="Password" />
			<button type="submit">Submit</button>
		</Form>
	);
};
export default App;
