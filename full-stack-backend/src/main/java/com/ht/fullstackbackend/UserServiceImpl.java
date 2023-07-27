package com.ht.fullstackbackend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Override
    public User getUser(int id) throws UserException{
        Optional<User> data = userRepository.findById(id);
        if(!data.isPresent()) throw new UserException("User Not found : Check user Id");
        return data.get();
    }

    @Override
    public List<User> getAllUser() throws UserException{
        List<User> data = userRepository.findAll();
        if(data.isEmpty()) throw new UserException("User Not found : Check user Id");
        return data;
    }

    @Override
    public String addUser(User user) throws UserException{
        Optional<User> data = userRepository.findById(user.getId());
        if(data.isPresent()) throw new UserException("User already Exists");
        userRepository.save(user);
        return "User with userId: "+user.getId()+" added successfully";
    }

    @Override
    public String editUser(User user) throws UserException{
        Optional<User> data = userRepository.findById(user.getId());
        if (!data.isPresent()) throw new UserException("User Not found : Check user Id");
        userRepository.save(user);
        return "User with userId: "+user.getId()+" modified successfully";
    }

    @Override
    public String deleteUserById(int id) throws UserException{
        Optional<User> data = userRepository.findById(id);
        if (!data.isPresent()) throw new UserException("User Not found : Check user Id");
        userRepository.deleteById(id);
        return "User with userId: "+id+" deleted successfully";
    }

    @Override
    public String deleteUser(User user) throws UserException {
        Optional<User> data = userRepository.findById(user.getId());
        if (!data.isPresent()) throw new UserException("User Not found : Check user Id");
        userRepository.deleteById(user.getId());
        return "User with userId: "+user.getId()+" deleted successfully";
    }
}
