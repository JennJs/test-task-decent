import { Button, Container, Image, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCountryByName } from "../../api";
import { ErrorPage } from "../Error";
import { ICountry, IError } from "../../types";

export const CountryInfo = () => {
  const { name } = useParams();
  const [errors, setErrors] = useState<IError | null>(null);

  const navigate = useNavigate();
  const [country, setCountry] = useState<ICountry | null>(null);

  useEffect(() => {
    getCountryByName(name!).then((res) =>
      res.hasOwnProperty("type")
        ? setErrors(res as IError)
        : setCountry(res as ICountry),
    );
  }, [name]);

  const onBack = () => navigate("/");

  return country != null ? (
    <Container className="w-50 vh-100 py-4 d-flex flex-column align-items-center ">
      <h1 className="text-center mb-4">Подробная информация</h1>
      <Table striped bordered>
        <tbody>
          <tr className="align-middle">
            <td>Название</td>
            <td className="fs-4">{country.name}</td>
          </tr>
          <tr className="align-middle">
            <td>Столица</td>
            <td className="fs-4">{country.capital}</td>
          </tr>
          <tr className="align-middle">
            <td>Флаг</td>
            <td className="fs-4">
              <Image width={40} src={country.flagUrl} />
            </td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={onBack}>Назад</Button>
    </Container>
  ) : (
    errors && <ErrorPage error={errors} />
  );
};
