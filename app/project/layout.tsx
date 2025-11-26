import { Content } from "@/src/components/layout/project-layout/Content";
import { Wrapper } from "@/src/components/layout/project-layout/Wrapper";


export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}