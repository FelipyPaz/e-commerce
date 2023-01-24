import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  AllItems,
  ContainerItems,
  SpecificItem,
  Img,
  All,
  Item,
} from "./styled";

function App() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [test, setTest] = useState([]);

  const [options, setOptions] = useState([
    { value: "brazilian_provider", label: "Fornecedor 1" },
    { value: "european_provider", label: "Fornecedor 2" },
  ]);
  const [selectedProvider, setSelectedProvider] = useState(options[0].value);

  console.log(data);
  console.log(product);
  console.log(test);
  /*  useEffect(() => {
    axios
      .get(
        "http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider"
      )
      .then((res) => {
        const sortedData = res.data.sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
        setData(sortedData);
        /*  const categories = res.data.map((item) => item.categoria);
        console.log(categories);

        const filteredData = res.data.filter(
          (item) => item.categoria === "desired category"
        );
        console.log(filteredData);

             let categoriies = res.data.map((item) => item.categoria);
        const uniqueCategories = categoriies.filter((item, index, self) => self.indexOf(item) === index);
        console.log(uniqueCategories); 

        let categoriies = res.data.map((item) => item.categoria);
        const uniqueCategories = Array.from(new Set(categoriies));
        setTest(uniqueCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */
  useEffect(() => {
    axios
      .get(
        `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/${selectedProvider}`
      )
      .then((res) => {
        if (selectedProvider === "brazilian_provider") {
          setData(
            res.data.map((item) => ({
              id: item.id,
              name: item.nome,
              price: item.preco,
              description: item.descricao,
            }))
          );
        } else {
          setData(
            res.data.map((item) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              description: item.description,
            }))
          );
        }
      })
      .catch((err) => console.log(err));
  }, [selectedProvider]);

  const handleProviderChange = (e) => {
    setSelectedProvider(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(
        `http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/${selectedProvider}/${searchId}`
      )
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <ContainerItems>
        <SpecificItem>
          <div>
        
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Buscar por ID, Exemplo 1"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
          </div>
          <Item>
            {product && (
              <div>
                <h2>Produto: {product.name || product.nome}</h2>
                <p>Preço: R${product.price || product.preco}</p>
                <p>Material: {product.details.material ||product.material }</p>
                <Img>
                  <img src={product.imagem || product.gallery} alt="Logo" />
                </Img>

                <p>Descrição: {product.description || product.descricao}</p>
              </div>
            )}
          </Item>
        </SpecificItem>

        <h1>Todos os items</h1>
        <All>
          <select value={selectedProvider} onChange={handleProviderChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {data.map((item) => (
            <AllItems key={item.id}>
              <h3>Nome: {item.name} </h3>
              <h4>Preço: {item.price} </h4>
              <p>Descrição: {item.description} </p>
            </AllItems>
          ))}
        </All>
      </ContainerItems>
    </Container>
  );
}

export default App;
