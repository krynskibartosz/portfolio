import { boolean, number } from "joi";
import { useRef, useState, useEffect, FC } from "react";
import { Scrollbar, Row, Spinner } from "@components";
import { deepCopy, objectTester } from "libraries/dash/object";
import { useUser } from "neo/classes/User";

interface InfiniteScrollProps {
  pageProps?: any;
  objectProps: any;
  child: FC;
  childProps?: any;
  reverse?: boolean;
  trigger?: () => {};
  className?: string;
  dependencies?: any[];
  style?: any;
  noFetch?: boolean;
  name?: any;
  fallback?: () => JSX.Element;
}

export const InfiniteScroll = ({
  pageProps,
  objectProps,
  child,
  childProps,
  dependencies = [],
  noFetch,
  reverse,
  trigger,
  style,
  fallback,
  ...rest
}: InfiniteScrollProps) => {
  console.log(
    "🚀 ~ file: InfiniteScroll.tsx ~ line 35 ~ dependencies",
    dependencies
  );
  const [page, setPage] = useState<number>(0);
  const scrollbar = useRef<HTMLDivElement>(null);
  const [previousData, setPreviousData] = useState<any>({});
  const pad: number = 10;

  // When page == objectProps.pages, all the pages are fetched
  const hasMore: boolean = page + 1 <= objectProps.r.pages;
  const param = {
    page,
    ...pageProps?.param,
  };
  const data = { ...pageProps?.data };

  // Scroll function, get the next page
  const scroll = () => objectProps.scroll({ param, data });

  // When the view reach the bottom the next page is fetched
  const handleAboutToReachBottom = () => {
    if (!objectProps.loading) {
      scroll();
      setPage(page + 1);
    }
  };

  // The trigger allow the infiniteScroll to reset the fetched data
  // for instance when the pageProps changed
  useEffect(() => {
    setPage(1);
    if (scrollbar.current)
      scrollbar.current.scrollTo({ behavior: "auto", top: 0 });
    // Scroll when triggered

    if (objectTester({ data, param }, previousData)) return;
    setPreviousData(deepCopy({ data, param }));

    if (noFetch) return;
    objectProps.scroll({ param: { ...param, page: 0 }, data });
  }, [trigger, ...dependencies]);

  // When the scroll moves we check if the view reach the bottom (top)
  const handleUpdate = () => {
    if (scrollbar.current === null) return;
    if (!hasMore) return;

    // scrolltop = offset of the top of the visible part of the component (bottom if reverse)
    // scrollHeight = the size of the entire component
    // clientHeight = the size of the visible part of the component
    const { scrollTop, scrollHeight, clientHeight } = scrollbar.current;
    if (reverse) {
      // If reverse the scrollTop (position of the bottom) is sufficiently low
      if (-scrollTop + pad > scrollHeight - clientHeight) {
        handleAboutToReachBottom();
      }
    } else {
      // If reverse the scrollTop (position of the top) is sufficiently high
      if (scrollTop + pad > scrollHeight - clientHeight) {
        handleAboutToReachBottom();
      }
    }
  };

  if (objectProps.r.data.length === 0 && fallback) {
    return fallback();
  }
  return (
    <div
      className={
        `noScrollbar flex ${
          reverse ? "flex-col-reverse" : "flex-col"
        } w-full overflow-auto` +
        " " +
        (rest?.className || "")
      }
      style={style}
      onScroll={handleUpdate}
      ref={scrollbar}
    >
      {/* Show the elements */}
      {objectProps.r.data?.map((el: any, index: number) =>
        child({ el: el, index: index, ...childProps })
      )}
      {/* If the data is fetching (when all the data is not yet fetched) */}
      {hasMore && (
        <Row positionY='center' positionX='center' className='w-full h-16 '>
          {/* <BouncingLoader loading={hasMore} /> */}
          <Spinner />
        </Row>
      )}
    </div>
  );
};
