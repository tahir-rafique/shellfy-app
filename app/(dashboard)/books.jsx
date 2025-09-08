import { FlatList, Pressable, StyleSheet } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constant/Colors";


//  themed Components
import ThemedText from "./../../components/ThemeText";
import ThemedView from "./../../components/ThemeView";
import ThemedCard from './../../components/ThemeCard';
import Spacer from "./../../components/Spacer";
import { useRouter } from "expo-router";


//  /books/1234   -----> dynamic routes

const Books = () => {

  const { books } = useBooks()
  const router = useRouter()

  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />

      <ThemedText title={true} style={styles.heading}>
        Your Reading List ....
      </ThemedText>
      <Spacer />

      {books ?
        <ThemedText style={{ marginHorizontal: 'auto', color: 'red', fontSize:20, textAlign:'center' }}>404 No book found in database!</ThemedText>
        :
        <FlatList
          data={books}
          keyExtractor={(item) => item.$id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => { router.push(`/books/${ item.$id }`) }}
            >
              <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{item.title}</ThemedText>
                <ThemedText>Written by {item.author}</ThemedText>
              </ThemedCard>
            </Pressable>
          )}
        />
      }



    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
