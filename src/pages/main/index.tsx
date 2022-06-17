import React, { useMemo, useCallback, useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { SVGS } from 'src/icons';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useMemoPad, useTodo, UseTodoProps } from 'store/memoStore';
import MemoPad from '@components/MemoPad';
import { useRouter } from 'next/router';
import Select from '@components/Select';
import { TargetAccordion } from '@components/Accordion/TargetAccordion';
import CustomAccordion from '@components/Accordion/CustomAccordion';
import { Sidebar } from '@components/SideBar';

const Main = ({}: {}) => {
  //메모지 전체 리스트
  const [memoComponent, setMemoComponent] = useTodo((state: any) => [
    state.todoList,
    state.setTodoList,
  ]);
  const [filter, setFilter] = useTodo((state: any) => [
    state.todoListFilter,
    state.setTodoListFilter,
  ]);

  //완료한일, 완료하지 못한일
  const optionData = ['all', 'complete', 'unComplete'];
  // 메모지 색깔별로 구분해주기  ['일' ,'친구','자기계발']
  const labelData = ['work', 'friend', 'selfDev'];
  //메모지 색깔 랜덤으로 바꿔주기
  const color = ['#FFC470', '#FFBDAE', '#B1D0FF', '#FFEA79'];
  let num = Math.floor(Math.random() * color.length);
  let colorSelect = color[num];

  //react-query Provider setting
  const queryClient = new QueryClient();
  const router = useRouter();
  // **zustand
  //폰트 사이즈 올리기
  const fontSize = useMemoPad((state: any) => state.fontSize);
  // zustand 로 필터링된 오늘리스트 가져오기
  const todoList = useTodo((state: any) => state.filteredTodoList());
  //어떠한 경우에만 값을 변경해주겠다. 현재상태랑 === 옛날상태가 같을때만
  const upFontSize = useMemoPad(
    (state: any) => state.upFontSize,
    (oldState: any, newState: any) => oldState === newState,
  );

  const grayCircleList = useMemo(
    () => Array.from({ length: 16 }, (_, i) => <GrayCircle key={i} />),
    [],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(e.target.value);
    },
    [filter],
  );
  //메모지 내용 추가하는 함수
  const handleChangeContent = useCallback(
    (i: number, text: string) => {
      const _memoComponent = [...memoComponent];
      const modify = {
        ..._memoComponent[i],
        content: text,
      };
      _memoComponent.splice(i, 1, modify);
      setMemoComponent(_memoComponent);
    },
    [memoComponent],
  );

  //메모지 할일체크하는 함수
  const handleChangeToggle = useCallback(
    (i: number, isComplete: boolean) => {
      const _memoComponent = [...memoComponent];
      const toggle = {
        ..._memoComponent[i],
        isComplete: !isComplete,
      };
      _memoComponent.splice(i, 1, toggle);
      setMemoComponent(_memoComponent);
    },
    [memoComponent],
  );

  //메모지 데이터 추가하는 함수
  const handleMemoAdd = useCallback(() => {
    const newItems = {
      bg: colorSelect,
      content: '',
      isComplete: false,
      column: 'Todo List',
    };
    setMemoComponent([...memoComponent, newItems]);
  }, [memoComponent]);

  //메모지 데이터 저장하는 함수
  const handleMemoSave = useCallback(() => {
    localStorage.setItem('memoItem', JSON.stringify(memoComponent));
    if (memoComponent) {
      alert('저장되었습니다.');
      router.push('/priority');
    }
  }, [memoComponent]);

  //메모지 데이터 하나씩 지우는 함수
  const handleMemoDelete = useCallback(
    (i: number) => {
      const _memoComponent = [...memoComponent];
      _memoComponent.splice(i, 1);
      setMemoComponent(_memoComponent);
    },

    [memoComponent],
  );
  // 년, 달, 일 클릭시 해당 페이지로 이동
  const targetMovePage = useCallback((target: string) => {
    if (target === 'year') {
      router.push('/plan/year');
    } else if (target === 'month') {
      router.push('/plan/month');
    } else if (target === 'week') {
      router.push('/plan/week');
    } else if (target === 'day') {
      router.push('/plan/day');
    }
  }, []);
  function MemoGetQuery() {
    const { isLoading, error, data } = useQuery(
      'data',
      () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
          (res) => res.json(),
        ),
      { cacheTime: 3000 },
    );
    if (isLoading) return <div>...loading</div>;
    if (error) return <div>...error</div>;
    return <div>{data.name}</div>;
  }
  //일단 저장하는 api를 안만들어서 localStorage 에 저장함!
  useEffect(() => {
    if (!memoComponent) return;
    const localMemoItem = localStorage.getItem('memoItem');
    if (localMemoItem !== null) {
      const parseMemoItem = JSON.parse(localMemoItem);
      setMemoComponent(parseMemoItem);
    }
    return () => {};
  }, []);
  return (
    <MainLayout>
      <QueryClientProvider client={queryClient}>
        {/* <MemoGetQuery /> */}
        <MainRow>
          <CircleBox>{grayCircleList}</CircleBox>
          <div className="flex h-full w-full flex-col p-4 ">
            <div className="flex justify-center">
              <ImageWrapper>
                <SVGS.ARROW_LEFT />
              </ImageWrapper>
              <div className="flex ">
                <Select
                  optionData={optionData}
                  filter={filter}
                  onChange={onChange}
                />
                <Select
                  optionData={labelData}
                  filter={filter}
                  onChange={onChange}
                />
                <Text style={{ fontSize }}>오늘의 할일 (9가지마법)</Text>
                <ImageWrapper onClick={handleMemoAdd}>
                  <SVGS.PLUS_BUTTON />
                </ImageWrapper>
              </div>
            </div>
            <CustomAccordion title="할일" content={'테스트'} />
            <CustomAccordion title="할일" content={'테스트'} />
            <CustomAccordion title="할일" content={'테스트'} />
            <CustomAccordion title="할일" content={'테스트'} />
            <CustomAccordion title="할일" content={'테스트'} />
            {/* <div className="mt-2 flex flex-wrap justify-center">
              {memoComponent?.map((item: any, i: number) => {
                return (
                  <MemoPad
                    bg={item.bg}
                    key={i}
                    done={item.isComplete}
                    content={item.content}
                    onToggle={() => handleChangeToggle(i, item.isComplete)}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleChangeContent(i, e.target.value)
                    }
                    onRemove={() => handleMemoDelete(i)}
                  />
                );
              })}
            </div> */}
            {memoComponent.length > 0 ? (
              <div className="mt-7 flex justify-center">
                <button
                  className=" h-full w-1/6 rounded-lg bg-dark-grayish-red text-white"
                  onClick={handleMemoSave}
                >
                  저장
                </button>
              </div>
            ) : (
              ''
            )}
          </div>

          <RectangleBox>
            <Sidebar width={'100%'}>
              <RectangleTabBar bg="#E14141">
                <TabText onClick={() => targetMovePage('year')}>
                  일년목표
                </TabText>
              </RectangleTabBar>
              <RectangleTabBar bg="#FA7719">
                <TabText onClick={() => targetMovePage('month')}>
                  한달목표
                </TabText>
              </RectangleTabBar>
              <RectangleTabBar bg="#BEC12D">
                <TabText onClick={() => targetMovePage('week')}>
                  일주일목표
                </TabText>
              </RectangleTabBar>
              <RectangleTabBar bg="#689C26">
                <TabText onClick={() => targetMovePage('day')}>
                  하루목표
                </TabText>
              </RectangleTabBar>
            </Sidebar>
          </RectangleBox>
        </MainRow>
      </QueryClientProvider>
    </MainLayout>
  );
};

const MainLayout = tw.div`
w-full
h-full
flex items-center
justify-center

`;
const MainRow = tw.div`
flex
w-full h-full
bg-more-light-grayish-red
rounded-lg

`;

const GrayCircle = tw.div`
bg-light-gray
w-10 h-10
rounded-3xl
mt-6
last-of-type:mb-6
`;
const Text = tw.div`
text-grayish-red
flex
justify-center
`;

const CircleBox = tw.div`
flex
justify-center
flex-col
ml-4


`;

const RectangleTabBar = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
h-1/4
w-24
rounded-lg
`,
  css`
    &:hover {
      transform: translateX(-13%);
      transition: transform 1s;
      background-color: ${bg};
    }

    background-color: ${bg};
  `,
]);
const RectangleBox = tw.div``;

const TabText = tw.div`
flex
items-center
h-full
text-white
justify-center
cursor-pointer
`;
const ImageWrapper = tw.div`
ml-2
mr-5
w-5
h-5
cursor-pointer
`;
export default Main;
