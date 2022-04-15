import Container from "./components/container/Container";
import { CardContainer } from "./components/container/CardContainer";
import { Circle } from "./components/container/Circle";
import { Row } from "./components/container/Row";
import { Star } from "./components/utils/Star";
import { Text } from "./components/utils/Text";
import { useState } from "react";
import { Button } from "./components/utils/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Main() {
  const [isVoted, setIsVoted] = useState(false);

  const [num, setNum] = useState(0);

  const [rateRange, setRateRange] = useState([
    { num: 1, clicked: false },
    { num: 2, clicked: false },
    { num: 3, clicked: false },
    { num: 4, clicked: false },
    { num: 5, clicked: false },
  ]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = (item) => {
    const clickedItem = rateRange.find((r) => r.num === item.num);
    if (clickedItem.clicked === true) {
      clickedItem.clicked = false;
      setIsVoted(!isVoted);
      return;
    }
    const unClickedItem = rateRange.filter((r) => r.num !== item.num);
    const index = rateRange.indexOf(clickedItem);
    const exceptIndex = unClickedItem.map((u) => u.num);
    rateRange[index]["clicked"] = true;
    exceptIndex.map((e) => (rateRange[e - 1]["clicked"] = false));
    setIsVoted(!isVoted);
    setNum(item.num);
  };
  const handleSubmit = () => {
    navigate("/thankyou");
    dispatch({
      type: "CHANGE",
      item: num,
    });
  };
  return (
    <div className="">
      <Container backgroundColor="VeryDarkBlue" text="White">
        <CardContainer backgroundColor="DarkBlue">
          <Row>
            <Circle bg="MediumBlue">
              <Star />
            </Circle>
          </Row>
          <Row direction="column">
            <Text size="25" color="White" bold="600">
              How did we do?
            </Text>
            <Text color="LightGrey" size="14">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Text>
          </Row>
          <Row direction="row">
            {rateRange.map((range) => (
              <Circle
                key={range.num}
                bg={range.clicked === true ? "Orange" : "MediumBlue"}
                margin={{ x: 5, y: 0 }}
                hvrBg="Orange"
                hvrColor="White"
                color={range.clicked === true ? "White" : "LightGrey"}
                onClick={(_) => handleClick(range)}
              >
                {range.num}
              </Circle>
            ))}
          </Row>
          <Row>
            <Button
              bg="Orange"
              hvrBg="#fc8936"
              atvBg="White"
              atvColor="Orange"
              onClick={(_) => isVoted && handleSubmit()}
            >
              <Text space="2" size="15" bold="600">
                SUBMIT
              </Text>
            </Button>
          </Row>
        </CardContainer>
      </Container>
    </div>
  );
}

export default Main;
