package com.sejong.vitaweb.service.mypage;


import com.sejong.vitaweb.dao.ModifyMyPageDao;
import com.sejong.vitaweb.vo.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultMyPageServiceImpl implements ModifyMyPageService {
    @Autowired
    ModifyMyPageDao modifyMyPageDao;


    @Override
    public boolean myAccountUpdate(Member member) throws Exception {
        if (modifyMyPageDao.myAccountUpdate(member) == 0) {
            return false;
        }
        return true;
    }
    @Override
    public Member get(String id) throws Exception {
        return modifyMyPageDao.findById(id);
    }
    @Override
    public int pwCheck(String memberId, String memberPw) throws Exception {
        int result = modifyMyPageDao.checkPassword(memberId, memberPw);
        return result;
    }
    @Override
    public int resignMember(String memberId, String memberPw) throws Exception {
        int result = modifyMyPageDao.resignMemberStatus(memberId, memberPw);
        return result;
    }
}

