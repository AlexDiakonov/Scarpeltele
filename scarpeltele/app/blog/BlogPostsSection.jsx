'use client';
import BlogItem from '../components/BlogItem/BlogItem';
import Container from '../Atoms/Container/Container';
import styles from './blog.module.scss';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ArrowLeft from '../assets/icons/ArrowLeft';
import ArrowRight from '../assets/icons/ArrowRight';
import { client } from '../lib/client';

const BlogPostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const windowWidth = window.innerWidth;

  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const query = `*[_type == "post"] | order(_createdAt desc) [${
        startIndex + 1
      }...${endIndex + 1}]`;
      const post = await client.fetch(query);
      const countQuery = 'count(*[_type == "post"])';
      const count = await client.fetch(countQuery);

      setTotalItems(count);
      setPosts(post);
    };

    fetchData();
  }, [currentPage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (windowWidth) {
      const container = containerRef.current;
      const items = container.getElementsByClassName(
        styles.postSection_postWrapper_item,
      );
      const itemCount = items.length;
      if (windowWidth > 1024) {
        for (let i = 0; i < itemCount; i++) {
          const item = items[i];

          if (i % 5 === 0 || i % 5 === 1 || i % 5 === 2) {
            item.classList.add(styles.threeItems);
          } else {
            item.classList.add(styles.twoItems);
          }
        }
      }
      if (windowWidth <= 1024) {
        for (let i = 0; i < itemCount; i++) {
          const item = items[i];

          if (i % 4 === 3) {
            item.classList.add(styles.fourthItem);
          }
        }
      }
    }
  }, [posts, currentPage, windowWidth]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container className={styles.postSection}>
      <div ref={containerRef} className={styles.postSection_postWrapper}>
        {posts.map((item) => (
          <BlogItem
            imageWrapper={styles.imgWrapper}
            className={styles.postSection_postWrapper_item}
            item={item}
            key={item._id}
          />
        ))}
      </div>
      <ReactPaginate
        className={styles.paginator}
        pageCount={totalPages}
        pageRangeDisplayed={5}
        pageClassName={styles.paginator_item}
        breakClassName={styles.paginator_item}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        activeClassName={styles.paginator_selected}
        previousLabel={<ArrowLeft className={styles.arrow} />}
        previousLinkClassName={styles.paginator_link}
        nextLinkClassName={styles.paginator_link}
        nextLabel={<ArrowRight className={styles.arrow} />}
      />
    </Container>
  );
};

export default BlogPostsSection;
