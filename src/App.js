import React, { useState } from "react"
import { Container, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Label, Img, Img2, Img3, Button, Button2, Input, Price, InputBill, Label2, Label4, InputPeople, Label3 } from './styles'
import logo from "./images/logo.svg"
import cifrao from "./images/icon-dollar.svg"
import people from "./images/icon-person.svg"

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [tip, setTip] = useState(0)
  const [color, setColor] = useState(true)


  const calcular = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const valor = (parseFloat(num1) * 1.05) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * 0.05) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)
      if (color === true)
        setColor(true)
    }

  }
  const calcular2 = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const valor = (parseFloat(num1) * 1.1) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * 0.10) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)
      if (color === true)
        setColor(false)
    }
  }

  const calcular3 = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const valor = (parseFloat(num1) * 1.15) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * 0.15) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)
      if (color === true)
        setColor(false)
    }
  }

  const calcular4 = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const valor = (parseFloat(num1) * 1.25) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * 0.25) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)
      if (color === true)
        setColor(false)
    }
  }

  const calcular5 = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const valor = (parseFloat(num1) * 1.5) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * 0.5) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)
      if (color === true)
        setColor(false)
    }
  }
  const calcular6 = () => {
    if (num2 === 0 || num2 === "") {
      alert('Impossível dividir por zero');
    } else {
      const percentual = parseFloat(num3 / 100)
      const valor = (parseFloat(num1) * (1 + percentual)) / parseFloat(num2)
      var valor1 = parseFloat(valor.toFixed(2))
      setResultado(valor1)
      const tip = (parseFloat(num1) * (num3 / 100)) / parseFloat(num2)
      var valor2 = parseFloat(tip.toFixed(2))
      setTip(valor2)

    }
  }
  const resetar = () => {
    setNum1('')
    setNum2('')
    setNum3('')
    setResultado('')
    setTip('')
  }

  return (
    <Container>
      <Div1>
        <Img src={logo} alt="logo" />
      </Div1>
      <Div2>
        <Div3>
          <Label>Bill</Label>
          <Div7>
            <Img2 src={cifrao} alt="money" />
            <InputBill
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </Div7>
          <Label>Select Tip %</Label>

          <Button
            onClick={() => { calcular() }}
            isColor={color}
          >5% </Button>
          <Button
            onClick={() => { calcular2() }}
            isColor={color}
          >10%</Button>
          <Button
            onClick={() => { calcular3() }}
            isColor={color}
          >15%</Button>
          <Button
            onClick={() => { calcular4() }}
            isColor={color}
          >25%</Button>
          <Button
            onClick={() => { calcular5() }}
            isColor={color}
          >50%</Button>
          <Input
            type='number'
            value={num3}
            onChange={(e) => setNum3(e.target.value)}
            onClick={() => { calcular6() }}
          ></Input>
          <Label2> Number of People</Label2>
          <Div8>
            <Img3 src={people} alt="person" />
            <InputPeople
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </Div8>
        </Div3>
        <Div4>
          <Div5>
            <div>
              <div><Label3> Tip Amount </Label3></div>
              <div><Label4> / person </Label4></div>
            </div>
            <Price> $ {tip} </Price>
          </Div5>
          <Div6>
            <div>
              <div><Label3>  Total </Label3></div>
              <div><Label4> / person </Label4></div>
            </div>
            <Price> $ {resultado} </Price>
          </Div6>
          <Button2
            type="reset"
            onClick={resetar}
          >
            RESET</Button2>
        </Div4>
      </Div2>
    </Container>
  );
}

export default App;
