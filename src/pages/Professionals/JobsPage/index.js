import styled from "@emotion/styled";
import { colors } from "assets/colors";
import { typography } from "assets/typography";
import CardJob from "components/CardJob/indes";
import { Input } from "components/Input";
import Select from "components/Select";
import { useJobs } from "context/JobsContext";
import { useEffect, useState } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Salary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & div {
    display: flex;
    gap: 3px;
  }
`;

const Label = styled.label`
  ${typography.regular.overline}
  color: ${colors.gray};
  text-transform: uppercase;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Selects = styled.div`
  display: flex;
  gap: 1rem;
`;
const CardGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Container = styled.div`
  padding: 1rem 0.5rem;
  & > h6 {
    ${typography.regular.headline6}
  }
`;

function JobsPage() {
  // const [type, setType] = useState([]);
  // icon, title, description, location, salary
  const { jobs, categories } = useJobs(); //llamamos al context
  const [list_categories, setCategory] = useState([]);
  console.log(jobs)
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jobs);
    setCategory(categories);
  }, [jobs, categories]);

  const initialData = () => {
    setData(jobs);
  };

  const handleSearch = (query) => {
    // console.log(query);
    if (query === "") {
      initialData();
    } else {
      const temp = [...data];
      let res = [];
      temp.forEach((item) => {
        if (
          item.title.toLowerCase().indexOf(query) > -1 ||
          item.recruiter.company_name.toLowerCase().indexOf(query) > -1
        ) {
          res.push(item);
        }
      });
      setData(res);
    }
  };
  return (
    <main>
      <h1>Find that job</h1>
      <Filters>
        <div>
          <Label htmlFor="search">search by job title or company name</Label>
          <Input
            type="text"
            onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            name="search"
            leftIcon={<FaSearch color={colors.gray} />}
          />
        </div>
        <Selects>
          <Select
            label="Category"
            placeholder="Select a category"
            options={list_categories.map((cat) => cat.name)}
          />
          <Select
            label="Type"
            placeholder="Select a type"
            options={["full time", "hibrido", "Short option"]}
          />
          <Salary>
            <Label htmlFor="search">Salary Range</Label>
            <div>
              <Input
                type="number"
                leftIcon={<BiDollarCircle />}
                placeholder="min"
              />
              -
              <Input
                type="number"
                leftIcon={<BiDollarCircle />}
                placeholder="max"
              />
            </div>
          </Salary>
        </Selects>
      </Filters>
      <Container>
        <h6>{data.length} jobs for you</h6>
        <CardGrid>
          {data.map((item) => {
            return <CardJob key={`card-${item.id}`} {...item} />;
          })}
        </CardGrid>
      </Container>
    </main>
  );
}

export default JobsPage;
