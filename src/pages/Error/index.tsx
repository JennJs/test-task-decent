import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import { IError } from "../../types";

import "./styles.css";

interface Props {
  error: IError;
  isRefresh?: boolean;
  onRefresh?: () => void;
}

export const ErrorPage: FC<Props> = ({ error, isRefresh, onRefresh }) => {
  const navigate = useNavigate();

  const onBack = () => navigate("/");
  return (
    <Container className="d-flex vh-100 align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center">{error.status}</h1>
        <p className="text-center">{error.message}</p>
        <Button onClick={isRefresh ? onRefresh : onBack}>
          {" "}
          {isRefresh ? "Обновить" : "На главную страницу"}
        </Button>
      </div>
    </Container>
  );
};
