import { FlatList } from "react-native";
import {useState} from "react";
import { fakeCommunityPosts } from "@/data/fakeData";
import {PostCard} from "@/components/PostCard";
import styled from "styled-components/native";

export default function CommunityScreen() {
  const [posts, setPosts] = useState(fakeCommunityPosts.slice(0, 10));

  const loadMore = () => {
    if (posts.length >= fakeCommunityPosts.length) return;
    setPosts(prev => [...prev, ...fakeCommunityPosts.slice(prev.length, prev.length + 5)]);
  };

  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;