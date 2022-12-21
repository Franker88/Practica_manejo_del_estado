import React from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });
  /*   const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false); */

  const onConfirm = () => {
    setState({ ...state, error: false, loading: false, confirmed: true });
  };

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  };

  const onError = () => {
    setState({ ...state, error: true, loading: false });
  };

  const onCheck = () => {
    setState({ ...state, error: false, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, deleted: false, confirmed: false, value: "" });
  };

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 1000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad.</p>

        {state.error && !state.loading && <p>Error: El código es incorrecto</p>}

        {state.loading && <p>Cargando...</p>}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <div>
          <p>Confirma tu petición. ¿Seguro que deseas eliminar?</p>
          <button
            onClick={() => {
              onDelete();
            }}
          >
            Si, Eliminar
          </button>
          <button
            onClick={() => {
              onReset();
            }}
          >
            No, Mantener
          </button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div>
          <p>Eliminado con Éxito</p>
          <button
            onClick={() => {
              onReset();
            }}
          >
            Recuperar State
          </button>
        </div>
      </React.Fragment>
    );
  }
};

export { UseState };
