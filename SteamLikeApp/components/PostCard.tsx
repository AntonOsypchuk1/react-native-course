import styled from "styled-components/native";
import {Avatar} from "@/components/Avatar";

interface PostProps {
  post: {
    user: string;
    avatar: string;
    image: string | undefined;
    timestamp: string;
    content: string;
  }
}

export const PostCard = ({ post }: PostProps) => (
  <Card>
    <Header>
      <Avatar uri={post.avatar} size={40} />
      <UserInfo>
        <Username>{post.user}</Username>
        <Timestamp>{post.timestamp}</Timestamp>
      </UserInfo>
    </Header>

    <Content>{post.content}</Content>

    {post.image && <PostImage source={{ uri: post.image }} resizeMode="cover" />}
  </Card>
);

const Card = styled.View`
    background-color: ${({ theme }) => theme.card};
    margin: 12px 16px;
    padding: 14px;
    border-radius: 12px;
    //elevation: 2;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const UserInfo = styled.View`
    margin-left: 10px;
`;

const Username = styled.Text`
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    font-size: 15px;
`;

const Timestamp = styled.Text`
    color: gray;
    font-size: 12px;
`;

const Content = styled.Text`
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    margin-bottom: 10px;
`;

const PostImage = styled.Image`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    margin-top: 8px;
`;