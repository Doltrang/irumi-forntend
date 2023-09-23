import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Fortune() {
  const [isLotusLightVisible, setIsLotusLightVisible] = useState(false);
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  // LotusTop 클릭 시 빛 번짐 애니메이션
  const handleLotusTopClick = () => {
    console.log("연꽃잎 클릭 감지");
    setIsLotusLightVisible(true);
  };

  // 애니메이션 종료 후 페이지 이동
  useEffect(() => {
    if (isLotusLightVisible) {
      const animationDuration = 1400; // 페이드인 애니메이션 보다 0.1초 빠르게 이동

      setTimeout(() => {
        setIsAnimationCompleted(true);

        // 페이지 이동 코드
        window.location.href = "/fortuneLotus";
      }, animationDuration);
    }
  }, [isLotusLightVisible]);

  return (
    <S.StarWrapper>
      <S.SparkleWrapper>
        <S.FortuneTitle>행운의 연꽃잎을 뽑아보세요</S.FortuneTitle>
        <S.LotusWhole className="lotus-whole">
          {isAnimationCompleted ? (
            <Link to="/fortuneLotus">
              <S.LotusTop />
            </Link>
          ) : (
            <>
              {isLotusLightVisible && (
                <S.LotusLight
                  className="fadeinshort"
                  onClick={handleLotusTopClick}
                />
              )}
              <S.LotusTop onClick={handleLotusTopClick} />
            </>
          )}
        </S.LotusWhole>
      </S.SparkleWrapper>
    </S.StarWrapper>
  );
}

export default Fortune;
