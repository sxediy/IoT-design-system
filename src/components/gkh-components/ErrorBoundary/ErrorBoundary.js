import React from "react"
import { UIError } from "utils/errors"
import ErrorHandlingService from "services/errorHandler"
import { div } from "gl-matrix/src/gl-matrix/vec4";
import styles from "./ErrorBoundary.less"

class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      console.log(info)
      ErrorHandlingService.exec(new UIError("ErrorBoundary caught error", {
        originalError: error,
        meta: {
          info,
        },
      }))
      // Display fallback UI
      this.setState({ hasError: true });

      // You can also log the error to an error reporting service
      // logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.panel}>
                <div className={styles.title}>Что-то пошло не так, но мы уже получили сообщение об ошибке.</div>
                <div className={styles.title}>Если ошибка не устраняется, обратитесь в контактный центр.</div>
              </div>
            </div>
          </div>
        );
      }
      return this.props.children;
    }

}

  export default ErrorBoundary