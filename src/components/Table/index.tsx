import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'react-feather';
import ReactPaginate from 'react-paginate';

import { Button, Tag, TableHeader, TableRow, Span, Title } from 'components';
import { Mobile, TabletAndAbove } from 'styles/media-queries';
import { User, users } from 'data';

import {
  Container,
  TableContainer,
  SpanContainer,
  Wrapper,
  LabelContainer,
} from './styles';
import './styles.css';

const itemsPerPage = 5;

const nextLabel = (): ReactNode => {
  return (
    <LabelContainer rel="nex" onClick={() => console.log('hi')}>
      <TabletAndAbove>
        <Span color="gray700" size="md" fontWeight="medium">
          Next
        </Span>
      </TabletAndAbove>

      <ArrowRight size={14} />
    </LabelContainer>
  );
};

const previousLabel = (): ReactNode => {
  return (
    <LabelContainer>
      <ArrowLeft size={14} />
      <TabletAndAbove>
        <Span color="gray700" size="md" fontWeight="medium">
          Previous
        </Span>
      </TabletAndAbove>
    </LabelContainer>
  );
};

export const Table: FC = () => {
  const [data, setData] = useState(users);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, data]);

  useEffect(() => {
    if (currentItems.length === 0 && pageCount !== 0) {
      setPageNumber((prev) => prev - 1);
      setItemOffset((prev) => prev - itemsPerPage);
    }
  }, [currentItems]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
    setItemOffset((event.selected * itemsPerPage) % users.length);
  };

  // handle header's checkbox
  const handleHeaderCheckbox = useCallback(
    (checked: boolean) => {
      checked
        ? setSelectedData(currentItems.map((item) => item.id))
        : setSelectedData([]);
    },
    [currentItems]
  );

  // handle row's checkbox
  const handleRowCheckbox = useCallback((data) => {
    setSelectedData((prev) =>
      prev.includes(data.id)
        ? prev.filter((item) => item !== data.id)
        : [...prev, data.id]
    );
  }, []);

  // handle delete
  const handleDelete = useCallback((user: User) => {
    setData((prev) => prev.filter((item) => item.id !== user.id));
  }, []);

  // handle delete selected
  const handleDeleteSelected = useCallback(() => {
    setData((prev) => prev.filter((item) => !selectedData.includes(item.id)));
    setSelectedData([]);
  }, [selectedData]);

  // TODO: add handle edit function
  const handleEdit = useCallback(() => {}, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <Span size="lg" color="gray900">
            Team members
          </Span>
          <Tag background="primary50" color="primary700">
            {data.length} users
          </Tag>

          {!!selectedData.length && (
            <Button
              icon="trash-2"
              color="white"
              iconColor="white"
              onClick={handleDeleteSelected}
            >
              Delete selected
            </Button>
          )}
        </div>

        <div>
          {/* 'Download CSV' file button */}
          <Button
            icon="download-cloud"
            background="white"
            color="black"
            bordered
          >
            Download CSV
          </Button>

          {/* 'Add user'  button */}
          <Button icon="plus" color="white" iconColor="white">
            Add user
          </Button>
        </div>
      </Container>

      <div style={{ overflow: 'hidden' }}>
        <TableContainer>
          {data.length ? (
            <>
              <TableHeader onCheckbox={handleHeaderCheckbox} />

              <tbody>
                {currentItems.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      data={row}
                      checked={selectedData.includes(row.id)}
                      onCheckbox={handleRowCheckbox}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                    />
                  );
                })}
              </tbody>
            </>
          ) : (
            <Title align="center" color="gray700" size="xs" fontWeight="medium">
              No users
            </Title>
          )}
        </TableContainer>
      </div>

      <div style={{ position: 'relative' }}>
        <ReactPaginate
          eventListener="onMouseDown"
          nextLabel={nextLabel()}
          previousLabel={previousLabel()}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          forcePage={pageNumber - 1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="paginate"
          nextClassName="next"
          previousClassName="previous"
          pageClassName="page"
          activeClassName="activeLink"
          pageLinkClassName="pageLink"
          nextPageRel="nex"
        />

        <Mobile>
          <SpanContainer>
            <Span color="gray500" size="md" fontWeight="medium" align="center">
              Page {pageNumber} of {pageCount}
            </Span>
          </SpanContainer>
        </Mobile>
      </div>
    </Wrapper>
  );
};
