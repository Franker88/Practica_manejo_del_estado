import React from "react";
import { Loading } from "./Loading";

const SECURIRT_CODE = "jojoligma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value !== SECURIRT_CODE) {
          this.setState({ error: true });
        }
        this.setState({ loading: false });
      }, 1000);
    }
  }

  render() {
    const { value, loading, error } = this.state;

    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>

        {error && <p>Error: El código es incorrecto</p>}

        {loading && <Loading />}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button onClick={() => this.setState({ loading: true, error: false })}>
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
