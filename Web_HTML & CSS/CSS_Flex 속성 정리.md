# CSS_Flex 속성 정리

display 값으로 flex를 준 이후,속성과 값을 조정하여 선택된 요소를 움직일 수 있다.

## justify-content

속성을 이용. 움직이게 함(가로)

- flex-start : 요소들을 컨테이너의 왼쪽으로 정렬
- flex-end : 요소들을 컨테이너의 오른쪽으로 정렬
- center : 요소들을 컨테이너의 가운데로 정렬
- space-between : 요소들 사이에 동일한 간격을 둔다.
- space-around : 요소들 주위에 동일한 간격을 둔다.

## align-items

세로 선에서 정렬한다.

- flex-start : 요소들을 컨테이너의 꼭대기로 정렬
- flex-end : 요소들을 컨테이너의 바닥으로 정렬
- center : 요소들을 컨테이너의 세로선 상의 가운데로 정렬
- baseline : 요소들을 컨테이너의 시작 위치에 정렬한다.
- stretch : 요소들을 컨테이너에 맞도록 늘린다.

## flex-direction

컨테이너 안에서 요소들이 정렬해야 할 방향을 지정한다.

- row : 요소들을 텍스트의 방향과 동일하게 정렬한다.
- row-reverse : 요소들을 텍스트의 반대 방향으로 정렬한다.
- colum : 요소들을 위에서 아래로 정렬한다.
- colum-reverse : 요소들을 아래에서 위로 정렬한다.

**column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀐다.**

## order

```null
//부모요소
.abcd {
  display: flex;
  align-items: flex-start;
}

//자식요소
.efg {
  align-self : flex-end;
  order: 5;
}
```

row나 column의 순서를 역으로 바꾸는 것만으로는 충분하지 않다.
이런 경우에는 order 속성을 각 요소에 적용할 수 있다.
order의 기본 값은 0이며, 양수나 음수로 바꿀 수 있다.

## align-self

align-self는 개별 요소에 적용할 수 있는 또 다른 속성이다.
이 속성은 align-items가 사용하는 값들을 인자로 받으며, 그 값들을 지정한 요소에만 적용된다.

## flex-wrap 속성

- nowrap : 모든 요소들을 한 줄에 정렬한다.
- wrap : 요소들을 여러 줄에 걸쳐 정렬한다.
- wrap-reverse : 요소들을 여러 줄에 걸쳐 반대로 정렬한다.

## flex-flow

**flex-direction과 flex-wrap이 자주 같이 사용되기 때문에,
flex-flow가 이를 대신할 수 있다.**

예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해
flex-flow: row wrap

## align-content

- align-content를 사용하여 여러 줄 사이의 간격을 지정할 수 있다.
- flex-start : 여러 줄들을 컨테이너의 꼭대기에 정렬한다.
- flex-end : 여러 줄들을 컨테이너의 바닥에 정렬한다.
- center : 여러 줄들을 세로선 상의 가운데에 정렬한다.
- space-between : 여러 줄들 사이에 동인한 간격을 둔다.
- space-around : 여러 줄들 주위에 동일한 간격을 둔다.
- stretch : 여러 줄들을 컨테이너에 맞도록 늘린다.

align-content는 여러 줄들 사이의 간격을 지정하며, align-items는 컨테이너 안에서
어떻게 모든 요소들이 정렬하는지를 지정합니다.
**한 줄만 있는 경우, align-content는 효과를 보이지 않는다.**