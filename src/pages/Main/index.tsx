import { Container, Image, ListGroup, ListGroupItem } from "react-bootstrap";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryList } from "../../api";
import { ICountry, IError } from "../../types";

import "./styles.css";
import { ErrorPage } from "../Error";

export const Main = () => {
  const navigate = useNavigate();
  const [countryList, setCountryList] = useState<any[]>([]);
  const [errors, setErrors] = useState<IError | null>(null);

  const fetchCountryList = () => {
    getCountryList().then((res) =>
      res.hasOwnProperty("type")
        ? setErrors(res as IError)
        : setCountryList(res),
    );
  };

  useEffect(() => {
    fetchCountryList();
  }, []);

  return countryList.length > 0 ? (
    <Container className="d-grid main">
      <h1 className="text-center">Список стран</h1>
      {countryList.length > 0 && (
        <ListGroup as="ol" numbered>
          {countryList.map((country) => (
            <ListGroupItem
              key={country.name.common}
              action
              onClick={() => navigate(`/country/${country.name.common}`)}
              className="ml-3"
            >
              <Image className="ms-3 me-2" width={20} src={country.flags.svg} />
              {country.name.common}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Container>
  ) : (
    errors && (
      <ErrorPage error={errors} isRefresh={true} onRefresh={fetchCountryList} />
    )
  );
};
